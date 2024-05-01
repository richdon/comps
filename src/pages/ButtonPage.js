import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'
export default function ButtonPage() {
    const handleClick = () => {
        console.log('Click!')
    }
    return (<div>
        <div>
            <Button success rounded onClick={handleClick} className='mb-5'>
                <GoBell/>
                Click here!
            </Button>
        </div>
        <div>
            <Button primary outline>
                <GoDatabase/>
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>Hide Ads!</Button>
        </div>
        <div>
            <Button secondary>
                <GoCloudDownload/>
                Add to Cart!
            </Button>
        </div>
        <div>
            <Button danger rounded>
                <GoBell/>
                Cancel!
            </Button>
        </div>
    </div>)
}