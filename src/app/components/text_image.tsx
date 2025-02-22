interface ImageTextProps {
    text: string;
    src: string;
    reverse: boolean;
  }
  
  export default function ImageText({ text, src }: ImageTextProps) {
    return (
        
      <div className="w-64 h-32  flex flex-col items-center justify-center rounded-lg shadow-md p-2">
        <img src={src} alt={text} className="w-16 h-16 object-cover rounded-full" />
        <p className="mt-2 text-center text-sm text-gray-700">{text}</p>
      </div>
    );
  }
  