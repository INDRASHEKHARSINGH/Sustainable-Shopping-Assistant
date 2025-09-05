import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navigate = useNavigate();
    return (
        <>
        <div className="max-w-4xl mx-auto p-8 mt-10">Sustainable shopping in e-commerce refers to the practice of buying products online in ways that are environmentally friendly, socially responsible, and economically viable. It’s about reducing the environmental impact of online purchases and supporting brands that prioritize ethical sourcing, fair labor, and low-waste practices.</div>


        <button
        onClick={() => navigate(-1)} // Go to previous page
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800"
      >
        ← Go Back
      </button>
        </>
    );
}