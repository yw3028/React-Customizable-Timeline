import React, { useState } from 'react';
import { S_TimelineItem } from './styles';
import { useSpring, animated, config } from 'react-spring';

type ItemProps = {
    title: string;
    subtitle?: string;
    content?: string;
    img?: { url: string; alt: string };
    label?: string;
    location?: string;
    animation?: boolean;
};

const TimelineItem: React.FC<ItemProps> = ({ title, subtitle, content, img, label, location, animation }) => {
    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
        setShowContent(!showContent);
    };
    const itemAnimation: Object = useSpring({
        from: { transform: 'scale3d(1.25, 0.75, 1)' },
        to: { transform: 'scale3d(1, 1, 1)' },
        config: config.wobbly,
    });
    return (
        <S_TimelineItem>
            <animated.div style={animation ? itemAnimation : undefined} onClick={handleClick}>
                <div style={{ cursor: 'pointer' }}>
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    {img && (
                        <img
                            style={{ maxWidth: '400px', width: '100%', minWidth: '100px', paddingBottom: '10px' }}
                            src={img.url}
                            alt={img.alt}
                        />
                    )}
                </div>
                {showContent && (
                    <div>
                        <div>{content}</div>
                        <div
                            style={{
                                fontSize: 'small',
                                textShadow: '0 0 0.75rem #625261',
                                padding: '10px 0',
                                textAlign: 'right',
                            }}
                        >
                            {label}
                        </div>
                    </div>
                )}
                {location && (
                    <div style={{ fontSize: 'small', textAlign: 'right' }}>
                        <span role="img" aria-label="localtion">
                            📍
                        </span>{' '}
                        {location}
                    </div>
                )}
            </animated.div>
        </S_TimelineItem>
    );
};

export default TimelineItem;
