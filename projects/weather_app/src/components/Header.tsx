import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.scss';
import { PlusOutlined, BulbOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <h1>
        <span className={styles.react}>React</span> 날씨 웹앱
      </h1>

      <button onClick={openModal} className={styles.settingBtn}>
        <PlusOutlined /> 설정
      </button>

      <Modal
        title="모드 설정"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            닫기
          </Button>,
        ]}
      >
        <Button
          type={darkMode ? 'default' : 'primary'}
          onClick={() => setDarkMode(false)}
        >
          <BulbOutlined /> 라이트 모드
        </Button>

        <Button
          style={{ marginLeft: '10px' }}
          type={darkMode ? 'primary' : 'default'}
          onClick={() => setDarkMode(true)}
        >
          <BulbOutlined /> 다크 모드
        </Button>
      </Modal>
    </header>
  );
};

export default Header;
