const OrangeBgPattern = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: '#FF0000',

        backgroundColor: '#DB4D00',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23DB4D00' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23e67400' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23ec9800' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23eebb00' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23ecdd1d' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23E6FF49' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,

        // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23FF0000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23ff4500' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23ff6500' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ff7e00' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23ff9500' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FFAA11' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,


        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default OrangeBgPattern;
