import Button from "@/components/Button/Button";
import styles from './Page.module.css';
import Arrow from '@/public/icons/Vector.svg';
import cn from "classnames";

const Page = () => {
    const iconStyles = cn(styles.svg, styles.svg);
    return (
        <div className={cn(styles.page)}>
            <Button icon={<Arrow/>} iconStyles={iconStyles} className={cn(styles.button)}>test</Button>
        </div>
    );
};

export default Page;