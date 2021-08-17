import './ColoredUserPic.css';

function ColoredUserPic(props) {

    const pictureSize = props.size - props.margin * 2 - props.colorWidth;

    function onHover() {
        document.querySelector('.user').style.background = `linear-gradient(-45deg, ${props.hoverColors[0]}, ${props.hoverColors[1]}`
    }

    function onLeave() {
        document.querySelector('.user').style.background = `linear-gradient(-45deg, ${props.colors[0]}, ${props.colors[1]})`
    }

    return (
        <div className="user" style={{width: props.size, height: props.size, borderRadius: '100%',
            boxSizing: 'border-box', background: `linear-gradient(-45deg, ${props.colors[0]}, ${props.colors[1]})`,
            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <img className="user-pic" src={props.src} alt="Avatar"  border={props.margin}
                 style={{width: pictureSize, height: pictureSize, borderColor: props.backgroundColor}} onMouseEnter={onHover} onMouseLeave={onLeave}/>
        </div>

    )
}

export default ColoredUserPic;