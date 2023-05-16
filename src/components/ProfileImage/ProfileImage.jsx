import React from 'react';
import styles from './ProfileImage.module.css';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import useSwitch from '../../hooks/useSwitch';
import useOutsideClick from '../../hooks/useOutsideClick';

function ProfileImage() {
  const [isMenuVisible, toogleVisible] = useSwitch(false);
  const menuRef = useOutsideClick(toogleVisible, isMenuVisible);

  return (
    <button type="button" className={styles.profile} ref={menuRef} onClick={toogleVisible}>
      D
      {isMenuVisible && <ProfileMenu />}
    </button>
  );
}

export default ProfileImage;
