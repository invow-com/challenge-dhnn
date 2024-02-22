'use client'
import Button from "./Button";

interface TextBlockProps {
    title: string;
    description: string;
    category: string;
    expanded?: boolean;
    type: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, description, category, expanded = true, type }) => {

    const handleClick = () => {
        console.log('Hero ctn clicked!');
    };
    return (
        <div className="w-full">
            <div className='w-full h-auto space-y-5'>
                <div className='space-y-2'>
                    <h6 className='text-overline text-gray-500'>{category}</h6>
                    <h3 className='text-title sm:text-desktop-h2 text-gray-900'>{title}</h3>
                </div>
                <div className={`space-y-5 ${expanded ? 'block-content' : 'hidden-content'}`}>
                    <div className="border-b border-primary-700 w-[120px]"></div>
                    <div className="space-y-5">
                        <p className='text-body-1 text-gray-700'>{description}</p>
                        <Button onClick={handleClick} type={type}></Button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default TextBlock