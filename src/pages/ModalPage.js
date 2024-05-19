import Modal from "../components/modal";
import Button from "../components/Button";
import {useState} from "react";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true)
    };
    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = <Button primary onClick={handleClose}>I accept</Button>
    const modal =
        <Modal
            onClose={handleClose}
            actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    return <div className="relative">
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquet neque, in dignissim orci.
            Phasellus gravida mollis lectus vel cursus. Curabitur viverra neque vitae lorem varius, at ullamcorper nulla
            lobortis. Maecenas sodales risus id fermentum fringilla. Quisque hendrerit ac arcu molestie sollicitudin.
            Pellentesque eget dapibus enim, in lacinia est. Praesent tempor pretium sem aliquet imperdiet. Nam et
            fermentum justo. Nulla sed purus ac arcu sodales condimentum.

            Ut risus nunc, venenatis sed tincidunt eget, molestie eu ex. Aliquam viverra eget metus ut convallis. Mauris
            feugiat quam id magna dictum venenatis. Nam tellus ante, volutpat eu leo in, malesuada auctor libero.
            Curabitur sagittis felis at tellus congue, at sagittis mi laoreet. Duis eros sapien, posuere et tellus nec,
            rutrum feugiat augue. Aliquam accumsan odio eget lacus euismod, ac sodales mi dictum. Curabitur rutrum
            semper enim sed consequat.

            Proin blandit finibus turpis ultrices dapibus. Integer nulla nulla, cursus vitae fermentum et, venenatis id
            purus. Aliquam erat volutpat. Duis pellentesque leo aliquam urna feugiat, eu hendrerit nisl venenatis. In
            facilisis pellentesque ligula non bibendum. Pellentesque eros nibh, finibus ut vulputate non, laoreet eget
            risus. Proin vehicula risus risus, non eleifend neque pellentesque vel. Donec varius nec risus et interdum.
            Duis nec feugiat leo, vitae viverra purus. Integer imperdiet ipsum a libero egestas accumsan. Vestibulum
            orci nulla, scelerisque non diam id, tincidunt ornare odio. Nulla semper, eros euismod venenatis ultricies,
            justo magna porta leo, quis mattis lacus elit at velit. Nullam tristique quam metus, non pharetra nibh
            interdum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget scelerisque felis.

            Maecenas eget mi est. Aenean odio augue, faucibus nec tortor at, auctor viverra neque. Integer dictum
            euismod rutrum. Sed feugiat dolor a quam rutrum efficitur. Cras in ex dui. Ut in quam non quam tempus
            pretium. Aenean non fermentum tellus, sed varius mi. Curabitur mauris sem, aliquet et egestas in, posuere
            eget risus. Duis at aliquam ligula.

            Sed ac odio leo. Nam ornare sapien sem, at ullamcorper leo elementum et. Curabitur non elit ac augue
            condimentum tristique. Pellentesque velit est, lacinia vulputate urna id, congue tincidunt orci. Phasellus
            iaculis risus tortor, sit amet dignissim ligula finibus sed. Phasellus dictum sem ut tellus accumsan, vel
            malesuada dolor accumsan. Donec sodales nulla at tortor gravida efficitur. Vivamus ornare aliquam tristique.
            Sed vel rutrum augue. Mauris lectus nunc, porttitor eget sollicitudin vel, facilisis quis justo. Curabitur
            et nulla vitae elit sagittis iaculis. Donec fringilla eros urna, ac facilisis ex condimentum et. Nullam
            scelerisque metus id sem dapibus, in mollis tortor imperdiet. </p>
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquet neque, in dignissim orci.
            Phasellus gravida mollis lectus vel cursus. Curabitur viverra neque vitae lorem varius, at ullamcorper nulla
            lobortis. Maecenas sodales risus id fermentum fringilla. Quisque hendrerit ac arcu molestie sollicitudin.
            Pellentesque eget dapibus enim, in lacinia est. Praesent tempor pretium sem aliquet imperdiet. Nam et
            fermentum justo. Nulla sed purus ac arcu sodales condimentum.

            Ut risus nunc, venenatis sed tincidunt eget, molestie eu ex. Aliquam viverra eget metus ut convallis. Mauris
            feugiat quam id magna dictum venenatis. Nam tellus ante, volutpat eu leo in, malesuada auctor libero.
            Curabitur sagittis felis at tellus congue, at sagittis mi laoreet. Duis eros sapien, posuere et tellus nec,
            rutrum feugiat augue. Aliquam accumsan odio eget lacus euismod, ac sodales mi dictum. Curabitur rutrum
            semper enim sed consequat.

            Proin blandit finibus turpis ultrices dapibus. Integer nulla nulla, cursus vitae fermentum et, venenatis id
            purus. Aliquam erat volutpat. Duis pellentesque leo aliquam urna feugiat, eu hendrerit nisl venenatis. In
            facilisis pellentesque ligula non bibendum. Pellentesque eros nibh, finibus ut vulputate non, laoreet eget
            risus. Proin vehicula risus risus, non eleifend neque pellentesque vel. Donec varius nec risus et interdum.
            Duis nec feugiat leo, vitae viverra purus. Integer imperdiet ipsum a libero egestas accumsan. Vestibulum
            orci nulla, scelerisque non diam id, tincidunt ornare odio. Nulla semper, eros euismod venenatis ultricies,
            justo magna porta leo, quis mattis lacus elit at velit. Nullam tristique quam metus, non pharetra nibh
            interdum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget scelerisque felis.

            Maecenas eget mi est. Aenean odio augue, faucibus nec tortor at, auctor viverra neque. Integer dictum
            euismod rutrum. Sed feugiat dolor a quam rutrum efficitur. Cras in ex dui. Ut in quam non quam tempus
            pretium. Aenean non fermentum tellus, sed varius mi. Curabitur mauris sem, aliquet et egestas in, posuere
            eget risus. Duis at aliquam ligula.

            Sed ac odio leo. Nam ornare sapien sem, at ullamcorper leo elementum et. Curabitur non elit ac augue
            condimentum tristique. Pellentesque velit est, lacinia vulputate urna id, congue tincidunt orci. Phasellus
            iaculis risus tortor, sit amet dignissim ligula finibus sed. Phasellus dictum sem ut tellus accumsan, vel
            malesuada dolor accumsan. Donec sodales nulla at tortor gravida efficitur. Vivamus ornare aliquam tristique.
            Sed vel rutrum augue. Mauris lectus nunc, porttitor eget sollicitudin vel, facilisis quis justo. Curabitur
            et nulla vitae elit sagittis iaculis. Donec fringilla eros urna, ac facilisis ex condimentum et. Nullam
            scelerisque metus id sem dapibus, in mollis tortor imperdiet. </p>
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquet neque, in dignissim orci.
            Phasellus gravida mollis lectus vel cursus. Curabitur viverra neque vitae lorem varius, at ullamcorper nulla
            lobortis. Maecenas sodales risus id fermentum fringilla. Quisque hendrerit ac arcu molestie sollicitudin.
            Pellentesque eget dapibus enim, in lacinia est. Praesent tempor pretium sem aliquet imperdiet. Nam et
            fermentum justo. Nulla sed purus ac arcu sodales condimentum.

            Ut risus nunc, venenatis sed tincidunt eget, molestie eu ex. Aliquam viverra eget metus ut convallis. Mauris
            feugiat quam id magna dictum venenatis. Nam tellus ante, volutpat eu leo in, malesuada auctor libero.
            Curabitur sagittis felis at tellus congue, at sagittis mi laoreet. Duis eros sapien, posuere et tellus nec,
            rutrum feugiat augue. Aliquam accumsan odio eget lacus euismod, ac sodales mi dictum. Curabitur rutrum
            semper enim sed consequat.

            Proin blandit finibus turpis ultrices dapibus. Integer nulla nulla, cursus vitae fermentum et, venenatis id
            purus. Aliquam erat volutpat. Duis pellentesque leo aliquam urna feugiat, eu hendrerit nisl venenatis. In
            facilisis pellentesque ligula non bibendum. Pellentesque eros nibh, finibus ut vulputate non, laoreet eget
            risus. Proin vehicula risus risus, non eleifend neque pellentesque vel. Donec varius nec risus et interdum.
            Duis nec feugiat leo, vitae viverra purus. Integer imperdiet ipsum a libero egestas accumsan. Vestibulum
            orci nulla, scelerisque non diam id, tincidunt ornare odio. Nulla semper, eros euismod venenatis ultricies,
            justo magna porta leo, quis mattis lacus elit at velit. Nullam tristique quam metus, non pharetra nibh
            interdum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget scelerisque felis.

            Maecenas eget mi est. Aenean odio augue, faucibus nec tortor at, auctor viverra neque. Integer dictum
            euismod rutrum. Sed feugiat dolor a quam rutrum efficitur. Cras in ex dui. Ut in quam non quam tempus
            pretium. Aenean non fermentum tellus, sed varius mi. Curabitur mauris sem, aliquet et egestas in, posuere
            eget risus. Duis at aliquam ligula.

            Sed ac odio leo. Nam ornare sapien sem, at ullamcorper leo elementum et. Curabitur non elit ac augue
            condimentum tristique. Pellentesque velit est, lacinia vulputate urna id, congue tincidunt orci. Phasellus
            iaculis risus tortor, sit amet dignissim ligula finibus sed. Phasellus dictum sem ut tellus accumsan, vel
            malesuada dolor accumsan. Donec sodales nulla at tortor gravida efficitur. Vivamus ornare aliquam tristique.
            Sed vel rutrum augue. Mauris lectus nunc, porttitor eget sollicitudin vel, facilisis quis justo. Curabitur
            et nulla vitae elit sagittis iaculis. Donec fringilla eros urna, ac facilisis ex condimentum et. Nullam
            scelerisque metus id sem dapibus, in mollis tortor imperdiet. </p>
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquet neque, in dignissim orci.
            Phasellus gravida mollis lectus vel cursus. Curabitur viverra neque vitae lorem varius, at ullamcorper nulla
            lobortis. Maecenas sodales risus id fermentum fringilla. Quisque hendrerit ac arcu molestie sollicitudin.
            Pellentesque eget dapibus enim, in lacinia est. Praesent tempor pretium sem aliquet imperdiet. Nam et
            fermentum justo. Nulla sed purus ac arcu sodales condimentum.

            Ut risus nunc, venenatis sed tincidunt eget, molestie eu ex. Aliquam viverra eget metus ut convallis. Mauris
            feugiat quam id magna dictum venenatis. Nam tellus ante, volutpat eu leo in, malesuada auctor libero.
            Curabitur sagittis felis at tellus congue, at sagittis mi laoreet. Duis eros sapien, posuere et tellus nec,
            rutrum feugiat augue. Aliquam accumsan odio eget lacus euismod, ac sodales mi dictum. Curabitur rutrum
            semper enim sed consequat.

            Proin blandit finibus turpis ultrices dapibus. Integer nulla nulla, cursus vitae fermentum et, venenatis id
            purus. Aliquam erat volutpat. Duis pellentesque leo aliquam urna feugiat, eu hendrerit nisl venenatis. In
            facilisis pellentesque ligula non bibendum. Pellentesque eros nibh, finibus ut vulputate non, laoreet eget
            risus. Proin vehicula risus risus, non eleifend neque pellentesque vel. Donec varius nec risus et interdum.
            Duis nec feugiat leo, vitae viverra purus. Integer imperdiet ipsum a libero egestas accumsan. Vestibulum
            orci nulla, scelerisque non diam id, tincidunt ornare odio. Nulla semper, eros euismod venenatis ultricies,
            justo magna porta leo, quis mattis lacus elit at velit. Nullam tristique quam metus, non pharetra nibh
            interdum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget scelerisque felis.

            Maecenas eget mi est. Aenean odio augue, faucibus nec tortor at, auctor viverra neque. Integer dictum
            euismod rutrum. Sed feugiat dolor a quam rutrum efficitur. Cras in ex dui. Ut in quam non quam tempus
            pretium. Aenean non fermentum tellus, sed varius mi. Curabitur mauris sem, aliquet et egestas in, posuere
            eget risus. Duis at aliquam ligula.

            Sed ac odio leo. Nam ornare sapien sem, at ullamcorper leo elementum et. Curabitur non elit ac augue
            condimentum tristique. Pellentesque velit est, lacinia vulputate urna id, congue tincidunt orci. Phasellus
            iaculis risus tortor, sit amet dignissim ligula finibus sed. Phasellus dictum sem ut tellus accumsan, vel
            malesuada dolor accumsan. Donec sodales nulla at tortor gravida efficitur. Vivamus ornare aliquam tristique.
            Sed vel rutrum augue. Mauris lectus nunc, porttitor eget sollicitudin vel, facilisis quis justo. Curabitur
            et nulla vitae elit sagittis iaculis. Donec fringilla eros urna, ac facilisis ex condimentum et. Nullam
            scelerisque metus id sem dapibus, in mollis tortor imperdiet. </p>
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquet neque, in dignissim orci.
            Phasellus gravida mollis lectus vel cursus. Curabitur viverra neque vitae lorem varius, at ullamcorper nulla
            lobortis. Maecenas sodales risus id fermentum fringilla. Quisque hendrerit ac arcu molestie sollicitudin.
            Pellentesque eget dapibus enim, in lacinia est. Praesent tempor pretium sem aliquet imperdiet. Nam et
            fermentum justo. Nulla sed purus ac arcu sodales condimentum.

            Ut risus nunc, venenatis sed tincidunt eget, molestie eu ex. Aliquam viverra eget metus ut convallis. Mauris
            feugiat quam id magna dictum venenatis. Nam tellus ante, volutpat eu leo in, malesuada auctor libero.
            Curabitur sagittis felis at tellus congue, at sagittis mi laoreet. Duis eros sapien, posuere et tellus nec,
            rutrum feugiat augue. Aliquam accumsan odio eget lacus euismod, ac sodales mi dictum. Curabitur rutrum
            semper enim sed consequat.

            Proin blandit finibus turpis ultrices dapibus. Integer nulla nulla, cursus vitae fermentum et, venenatis id
            purus. Aliquam erat volutpat. Duis pellentesque leo aliquam urna feugiat, eu hendrerit nisl venenatis. In
            facilisis pellentesque ligula non bibendum. Pellentesque eros nibh, finibus ut vulputate non, laoreet eget
            risus. Proin vehicula risus risus, non eleifend neque pellentesque vel. Donec varius nec risus et interdum.
            Duis nec feugiat leo, vitae viverra purus. Integer imperdiet ipsum a libero egestas accumsan. Vestibulum
            orci nulla, scelerisque non diam id, tincidunt ornare odio. Nulla semper, eros euismod venenatis ultricies,
            justo magna porta leo, quis mattis lacus elit at velit. Nullam tristique quam metus, non pharetra nibh
            interdum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget scelerisque felis.

            Maecenas eget mi est. Aenean odio augue, faucibus nec tortor at, auctor viverra neque. Integer dictum
            euismod rutrum. Sed feugiat dolor a quam rutrum efficitur. Cras in ex dui. Ut in quam non quam tempus
            pretium. Aenean non fermentum tellus, sed varius mi. Curabitur mauris sem, aliquet et egestas in, posuere
            eget risus. Duis at aliquam ligula.

            Sed ac odio leo. Nam ornare sapien sem, at ullamcorper leo elementum et. Curabitur non elit ac augue
            condimentum tristique. Pellentesque velit est, lacinia vulputate urna id, congue tincidunt orci. Phasellus
            iaculis risus tortor, sit amet dignissim ligula finibus sed. Phasellus dictum sem ut tellus accumsan, vel
            malesuada dolor accumsan. Donec sodales nulla at tortor gravida efficitur. Vivamus ornare aliquam tristique.
            Sed vel rutrum augue. Mauris lectus nunc, porttitor eget sollicitudin vel, facilisis quis justo. Curabitur
            et nulla vitae elit sagittis iaculis. Donec fringilla eros urna, ac facilisis ex condimentum et. Nullam
            scelerisque metus id sem dapibus, in mollis tortor imperdiet. </p>
    </div>
}