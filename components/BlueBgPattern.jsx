
const BlueBgPattern = () => {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',

          backgroundColor: '#005B78',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23005B78' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%230b7996' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231c99b3' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%2330bace' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%2348dbe8' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%2364FEFF' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
    
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      ></div>
    );
  };
  
  export default BlueBgPattern;






