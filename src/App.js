import Button from "./Button";

export default function app() {
    return (<div>
        <div>
            <Button success rounded outline>Click here!</Button>
        </div>
        <div>
            <Button primary outline>Buy Now!</Button>
        </div>
        <div>
            <Button warning>Hide Ads!</Button>
        </div>
        <div>
            <Button secondary outline>Add to Cart!</Button>
        </div>
        <div>
            <Button danger rounded>Cancel!</Button>
        </div>
    </div>)
}