import { useNavigation } from "next/navigation";

const ButtonBack = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.back(); // Go back to the previous page
  };

  return (
    <button
      onClick={handleGoBack}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Back
    </button>
  );
};

export default ButtonBack;
