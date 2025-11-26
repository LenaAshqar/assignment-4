import { useId, useMemo, useState } from 'react';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({
                         image,
                         imageDark,
                         imageLight,
                         title,
                         description,
                         tags = [],
                         year,
                         link,
                         className = '',
                         theme = 'dark',
                         isExpanded: isExpandedProp,
                         onToggle,
                         ...rest
                     }) => {
    const [internalExpanded, setInternalExpanded] = useState(false);
    const isControlled = typeof isExpandedProp === 'boolean';
    const isExpanded = isControlled ? isExpandedProp : internalExpanded;
    const detailsId = useId();

    const handleToggle = () => {
        if (isControlled) {
            onToggle?.();
        } else {
            setInternalExpanded(previous => !previous);
        }
    };

    const resolvedImage = useMemo(() => {
        if (theme === 'light') {
            return imageLight ?? image ?? imageDark;
        }

        return imageDark ?? image ?? imageLight;
    }, [theme, image, imageDark, imageLight]);

    return (
        <article className={`project-card surface-card ${className}`.trim()} {...rest}>
            <div className="project-media">
                {resolvedImage ? (
                    <img src={resolvedImage} alt={title} loading="lazy" />
                        ) : (
                    <div className="project-media--placeholder" aria-hidden="true">
                        <span>{title.slice(0, 1)}</span>
                    </div>
                        )}
                {year && <span className="project-year">{year}</span>}
            </div>
            <div className="project-body">
                <button
                    type="button"
                    className={`project-toggle ${isExpanded ? 'is-open' : ''}`}
                    onClick={handleToggle}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                >
                    <span className="project-title">{title}</span>
                    <FiChevronDown aria-hidden="true" />
                </button>
                <div id={detailsId} className={`project-details ${isExpanded ? 'is-open' : ''}`.trim()} hidden={!isExpanded}>
                    <p>{description}</p>
                    {tags.length > 0 && (
                        <ul className="project-tags" role="list">
                            {tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    )}
                    <div className="project-footer">
                        {link ? (
                            <a className="project-link" href={link} target="_blank" rel="noreferrer noopener">
                                View project
                                <FiArrowUpRight aria-hidden="true" />
                            </a>
                        ) : (
                            <span className="project-link project-link--muted">
                                Link to Project Details
                                <FiArrowUpRight aria-hidden="true" />
                            </span>
                        )}
                    </div>
                </div>
            </div>
    </article>
    );
};
export default ProjectCard;