import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
import cn from "classnames";
import Icon from '../../public/github.svg';

const Header = ({...props}: HeaderProps) => {
    return (
        <div {...props} className={cn(styles.header)}>
            <span>.my_blog</span>
            <Icon/>
        </div>
    );
};

export default Header;