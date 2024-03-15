interface HomeTitleProps {
  label: string;
}

const HomeTitle = ({ label }: HomeTitleProps) => {
  return (
    <div>
      <span className="text-4xl font-semibold text-blogSoftRed">
        {label}
      </span>
    </div>
  );
};

export default HomeTitle;
