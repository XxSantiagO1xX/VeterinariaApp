
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgTop() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 377 481.611">
        <Path
          fill="url(#a)"
          d="M179.238 487.707C83.11 534.227 23.364 503.495 0 481.611V0h377v481.611c-32.543-19.383-101.635-40.423-197.762 6.096Z"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={5.507}
            x2={346.459}
            y1={6.565}
            y2={503.833}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#DEC4FC" />
            <Stop offset={1} stopColor="#91C6FC" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  
  