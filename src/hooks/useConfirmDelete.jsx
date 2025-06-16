import toast from "react-hot-toast";

const useConfirmDelete = () => {
  const showConfirmToast = (onConfirm) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete?</p>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                onConfirm();
              }}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Confirm
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
        position: 'top right'
      }
    );
  };

  return showConfirmToast;
};

export default useConfirmDelete;
