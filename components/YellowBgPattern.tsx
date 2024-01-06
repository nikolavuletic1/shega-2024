interface YellowBgPatternProps {
  onLoad?: () => void;
}
const YellowBgPattern: React.FC<YellowBgPatternProps> = ({ onLoad }) => {

  const handleImageLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };
  return (
    <div onLoad={handleImageLoad}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFD500',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23FFD500' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23ffd633' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23ffe066' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ffe699' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23ffebcc' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FFEEFF' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}>
      </div>
  );
};


export default YellowBgPattern;

