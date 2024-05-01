import Button from "./components/Accordion";

import Accordion from "./components/Accordion";

export default function app() {
    const items = [
        {label:'React', content:'Learn React', id:'f234f'},
        {label:'Javascript', content:'Learn JS', id:'g545'},
        {label:'Type Script', content:'Learn TS', id:'f4334'},
        {label:'Python', content:'Learn Python', id:'43f14df'}
    ]
    return <Accordion items={items}/>;
}