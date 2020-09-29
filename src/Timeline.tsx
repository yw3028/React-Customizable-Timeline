import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ThemeProvider } from 'styled-components';
import TimelineItem from './TimelineItem';
import { S_Timeline, S_TimelineSection, S_Title } from './styles';
import { Item } from './Models/Item';
import { Fade } from 'react-awesome-reveal';

type Props = {
    animation?: boolean;
    data?: Item[];
    primaryDarkColor?: string;
    primaryLightColor?: string;
    primaryFont?: string;
    titleShape?: string;
    dotShape?: string;
    lineStyle?: string;
};

const Timeline: React.FC<Props> = ({
    animation = true,
    data,
    primaryDarkColor = '#625261',
    primaryLightColor = '#F5F5DC',
    primaryFont = "'Chivo', sans-serif",
    titleShape = 'circle',
    dotShape = 'circle',
    lineStyle = 'dotted',
}) => {
    const theme = { primaryDarkColor, primaryLightColor, primaryFont, titleShape, dotShape, lineStyle };

    const titleAnimation: Object = useSpring({
        from: {
            transform: `translate3d(0, -4px, 0) scaleY(1.02)`,
        },
        to: {
            transform: 'translate3d(0, 0, 0) scaleY(1.02)',
        },
        config: config.wobbly,
    });

    const lineAnimation: Object = useSpring({
        from: { transform: 'translate3d(-100%, 0, 0)' },
        to: { transform: 'translate3d(0, 0, 0)' },
        config: { mass: 2, tension: 120, friction: 24 },
        reset: animated,
    } as any);

    return (
        <ThemeProvider theme={theme}>
            <animated.div style={animation ? lineAnimation : undefined}>
                <S_Timeline>
                    {data?.map((item, index) => {
                        return (
                            <S_TimelineSection key={index}>
                                <animated.div style={animation ? titleAnimation : undefined}>
                                    <S_Title key={item.title}>
                                        <div>{item.title}</div>
                                    </S_Title>
                                </animated.div>
                                {item.events.map((event, index) => {
                                    return (
                                        <Fade>
                                            <TimelineItem
                                                key={index}
                                                title={event.title}
                                                subtitle={event.subtitle}
                                                content={event.content}
                                                img={event.img}
                                                label={event.label}
                                                location={event.location}
                                                animation={animation}
                                            />
                                        </Fade>
                                    );
                                })}
                            </S_TimelineSection>
                        );
                    })}
                </S_Timeline>
            </animated.div>
        </ThemeProvider>
    );
};

export default Timeline;
