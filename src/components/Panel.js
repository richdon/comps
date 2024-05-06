import classNames from "classnames";
export function Panel({children, className, ...rest}){
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white',
        className
    );
    return <div{...rest} className={finalClassNames}>{children}</div>
}