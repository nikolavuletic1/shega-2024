
const BgPattern = () => {
  return (
    <div
      style={{
        position: 'relative',
   
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FF560F',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Crect fill='%23FF560F' width='800' height='800'/%3E%3Cg %3E%3Ccircle fill='%23FF560F' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23ff7b00' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23ff9d00' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ffbf00' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23ffdf00' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FFFF00' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default BgPattern;














