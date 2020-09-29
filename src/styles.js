import styled from 'styled-components';

const dotShapeSelector = (shape) => {
    switch (shape) {
        case 'circle':
            return `
            border-radius: 50%;
            height: 12px;
            width: 12px;
            `;

        case 'square':
            return `
            height: 12px;
            width: 12px;
            `;
        case 'diamond':
            return `
            transform: rotate(45deg);
            height: 12px;
            width: 12px;
            `;
        case 'line':
            return `
            width: 12px;
                `;
        default:
            return `
            border-radius: 50%;
            height: 12px;
            width: 12px;
            `;
    }
};

const titleShapeSelector = (shape, color) => {
    switch (shape) {
        case 'circle':
            return `
            border-radius: 50%;
            height: 70px;
            width: 70px;
            `;
        case 'square':
            return `
            height: 60px;
            width: 60px;
            border-radius: 4px;
            right:88px;
            `;
        case 'rectangular':
            return `
            height: 40px;
            width: 70px;
            border-radius: 4px;
            `;

        case 'diamond':
            return `
            transform: rotate(45deg);
            height: 54px;
            width: 54px;
            right:86px;
            border-radius: 4px;

            & > div {
                transform: rotate(-45deg);
              }
            `;

        default:
            return `
            border-radius: 50%;
            height: 70px;
            width: 70px;
            `;
    }
};

export const S_Title = styled.div`
    background-color: ${(props) => props.theme.primaryLightColor};
    font-weight: 700;
    font-size: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.primaryDarkColor};
    padding: 5px;
    margin-bottom: 50px;
    position: relative;
    right: 92px;
    top: 0;
    bottom: 17px;
    border: 3px double ${(props) => props.theme.primaryDarkColor};
    ${(props) => titleShapeSelector(props.theme.titleShape, props.theme.primaryDarkColor)};
`;

export const S_Timeline = styled.div`
    border-left: 2px ${(props) => props.theme.lineStyle} ${(props) => props.theme.primaryDarkColor};
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    color: ${(props) => props.theme.primaryDarkColor};
    font-family: ${(props) => props.theme.primaryFont};
    margin: 60px auto;
    position: relative;
    line-height: 1.5em;
    font-size: 1em;
    padding-left: 50px;
    text-align: left;
    font-weight: 100;
    max-width: 400px;
`;

export const S_TimelineSection = styled.div`
    position: relative;
`;

export const S_TimelineItem = styled.div`
    padding-bottom: 25px;
    margin-bottom: 30px;
    position: relative;
    border-bottom: 1px ${(props) => props.theme.lineStyle} ${(props) => props.theme.primaryDarkColor};

    &:before,
    &:after {
        position: absolute;
        display: block;
        top: 0;
    }

    &:after {
        ${(props) => dotShapeSelector(props.theme.dotShape)};
        box-shadow: 0 0 0 1px ${(props) => props.theme.primaryDarkColor};
        left: -57px;
        background: ${(props) => props.theme.primaryDarkColor};
        content: '';
        top: 7px;
    }
`;
