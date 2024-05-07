import classNames from "classnames";
import {useContext} from "react";
import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/useNavigation";
function Link({to, children}){
    const {navigate} = useNavigation()

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.metaKey||event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to)

    };
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}
export default Link