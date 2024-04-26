"use client";

export default function ShoppingList(props: { shoppingList: string }) {
  const shoppingList = props.shoppingList;

  return (
    <>
      <button className="btn btn-neutral" onClick={() => (document.getElementById('shopping-list') as HTMLDialogElement).showModal()}>Grocery List</button>
      <dialog id="shopping-list" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Grocery List</h3>
          <p className="py-4 render-newline">{shoppingList}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}