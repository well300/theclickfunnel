const Button = ({ to, text, icon: Icon, className = "" }) => {
    return (
      <a
        href={to}
        className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 
        bg-[#131313] hover:bg-gray-800 cursor-none ${className}`}
      >
        {Icon && <Icon size={18} />}
        <span className="inherit">{text}</span>
      </a>
    );
  };
  
  export default Button;
  