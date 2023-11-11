# Share all about web development

### Installation

```
npm install
```

### Local Development

```
npm start
```

### Build

```
npm build
```

## Contributors

This project exists thanks to all the people who contribute.

<p>
<a href="https://github.com/hunghg255/web-totals/graphs/contributors"><img src="https://contrib.rocks/image?repo=hunghg255/web-totals" /></a>
</p>

## How to write markdown

### Embed Expo

````
```SnackPlayer name=Hello%20World
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
}

export default YourApp;```

````

### Embed StackBlitz

```
<Stackblitz name={'react-ts-mdxcmx'} />
```

### Live code: Add block with keywork live

````
```tsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}```
````

### Live code with Mutil components

````
```jsx live noInline
const project = 'Docusaurus';

const Greeting = () => <p>Hello {project}!</p>;

render(<Greeting />);```
````

### Mermaid: add block with keyword mermaid

````
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;```
````

### npm2yarn

````
```bash npm2yarn
npm install rc-select```
````

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
