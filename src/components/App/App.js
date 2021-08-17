import './App.css';


import ColoredUserPic from "../ColoredUserPic/ColoredUserPic";

function App() {
  return (
    <ColoredUserPic src='images/avatar.jpeg'
                    size={150}
                    margin={4}
                    backgroundColor='red'
                    colors={['green', 'blue']}
                    hoverColors={['blue', 'green']}
                    colorWidth={6}
    />
  );
}

export default App;
