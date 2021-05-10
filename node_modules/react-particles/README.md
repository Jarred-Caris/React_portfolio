# react-particles
Unjquerified Reactive [Customizable Interactive Particles Animation](http://www.jqueryscript.net/animation/Customizable-Interactive-Particles-Animation-with-jQuery-jParticle.html)

## Usage
This React component is written in ES2015, so use it with a transpiler such as Babel.

`npm install react-particles`

### API
```javascript
import ReactDOM from 'react-dom';
import Particles from 'react-particles';

// later

ReactDOM.render(<Particles />, document.getElementById('content'));
```

#### Props

##### Canvas width `width` `number` (default: `250`)

##### Canvas height `height` `number` (default: `250`)

##### Particles configuration `object`
- `particles.particlesNumber` `number` (default: `150`) Amount of particles.
- `particles.linkDist` `number` (default: `100`) Distance where link is full opacity
- `particles.createLinkDist` `number` (default: `150`) Distance where particles start linking.
- `particles.disableLinks` `bool` (default: `false`) Disable particle links
- `particles.disableMouse` `bool` (default: `false`) Disable particle mouse interactions
- `particles.linksWidth` `number` (default: `1`) Particle links width.
- `particles.background` `string` (default: `transparent`) Background color.
- `particles.color` `string` (default: `#333333`) Links color.

##### Particle configuration `object`
- `particle.color` `string` (default: `'#333333'`) Particles color.
- `particle.minSize` `string` (default: `2`) Particle minimum size.
- `particle.maxSize` `string` (default: `4`) Particle maximum size.
- `particle.speed` `string` (default: `20`) Animation speed.


### Demo

Clone this repo, in your terminal, type:

```
cd react-particles
npm install
npm run dev
```

Then open your browser at http://localhost:8080/.
