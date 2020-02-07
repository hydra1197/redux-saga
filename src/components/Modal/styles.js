const styles = theme => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    outline: 'none',
    backgroundColor: '#ffffff',
    zIndex: 998,
  },
  input: {
    width: '100%'
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: 15,
    fontSize: 20,
    textTransform: 'capitalize'
  },
  content: {
    padding: 15
  },
  actions: {
    padding: 15
  }
});

export default styles;