import { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import palette from '../../assets/theme/theme';

const MyStatusBar = ({ children }) => {
  const { isChangeStatusBar } = useContext(GlobalDataContext);

  return (
    <>
      <StatusBar
        barStyle={isChangeStatusBar ? 'light-content' : 'dark-content'}
        hidden={false}
        backgroundColor={
          isChangeStatusBar
            ? palette.primary_blue
            : palette.gray
        }
        translucent={false}
      />
      {children}
    </>
  );
};

MyStatusBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(MyStatusBar);