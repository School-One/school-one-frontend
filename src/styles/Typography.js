import { createGlobalStyle } from 'styled-components';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Poppins Bold';
        src: url(${PoppinsBold});
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins Regular';
        src: url(${PoppinsRegular});
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins SemiBold';
        src: url(${PoppinsSemiBold});
        font-style: normal;
    }
`;

export default Typography;