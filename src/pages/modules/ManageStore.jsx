import React, { useState } from "react";
import StoreModal from "./StoreModal";

const initialStores = [
  {
    id: 1,
    name: "Downtown Flagship",
    city: "New York, NY, USA",
    manager: "Alex Morgan (@alexm)",
    phone: "+1 (555) 234-5678",
    image: "",
  },
  {
    id: 2,
    name: "Westside Hub",
    city: "Los Angeles, CA, USA",
    manager: "Sarah Jenkins (@sjenkins)",
    phone: "+1 (555) 987-6543",
    image: "",
  },
];

const emptyForm = {
  name: "",
  image: "",
  location: "",
  street: "",
  city: "",
  pincode: "",
  country: "",
};

export default function ManageStore() {
  const [showModal, setShowModal] = useState(false);
  const [stores, setStores] = useState(initialStores);
  const [form, setForm] = useState(emptyForm);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const imageSelected = (e) => {
    const file = e.target.files?.[0];
    if (file) update("image", URL.createObjectURL(file));
  };

  const addStore = (e) => {
    e.preventDefault();

    setStores((current) => [
      ...current,
      {
        id: Date.now(),
        name: form.name,
        city: [form.city, form.country].filter(Boolean).join(", "),
        manager: "",
        phone: "",
        image: form.image,
        location: form.location,
        street: form.street,
        pincode: form.pincode,
      },
    ]);

    setForm(emptyForm);
    setShowModal(false);
  };

  return (
    <section className="manage-store-page">
      <div className="page-header manage-store-header">
        <div>
          <h1>Manage Team &amp; Stores</h1>
          <p>Oversee your sales representatives, store locations, and permissions.</p>
        </div>

        <button
          className="gold-button add-store-btn"
          onClick={() => setShowModal(true)}
        >
          <i className="fa-solid fa-store" /> Add Store
        </button>
      </div>

      <div className="store-grid">
        {stores.map((store) => (
          <div className="store-card" key={store.id}>
            <div className="store-card-top">
              <div className="store-logo">
                {store.image ? (
                  <img src={store.image} alt={store.name} />
                ) : (
                  <span>Store</span>
                )}
              </div>

              <div className="store-main-info">
                <h3>{store.name}</h3>
                <p>{store.city}</p>
              </div>

              <span className="store-status">Active</span>
            </div>

            <div className="store-divider" />

            {store.manager || store.phone ? (
              <div className="store-details">
                {store.manager && (
                  <p><strong>Manager:</strong> {store.manager}</p>
                )}
                {store.phone && (
                  <p><strong>Phone:</strong> {store.phone}</p>
                )}
              </div>
            ) : (
              <div className="store-details">
                {store.location && (
                  <p className="store-location">
                    <i className="fa-solid fa-location-dot" /> {store.location}
                  </p>
                )}
                {store.street && <p>{store.street}</p>}
                {store.pincode && <p>{store.pincode}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <StoreModal
          form={form}
          update={update}
          imageSelected={imageSelected}
          onClose={() => setShowModal(false)}
          onSubmit={addStore}
        />
      )}
    </section>
  );
}
