const NavBgPattern = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: '#FF0000',

        backgroundColor: '#ff6d26',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23fffc00' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,


        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default NavBgPattern;





