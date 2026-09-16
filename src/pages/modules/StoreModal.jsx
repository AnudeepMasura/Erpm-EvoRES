import React from "react";

export default function StoreModal({ form, update, imageSelected, onClose, onSubmit }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="store-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Store</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="modal-form-grid">
            <div className="modal-field">
              <label>Store Name</label>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter store name" required />
            </div>

            <div className="modal-field">
              <label>Store Image</label>
              <input type="file" accept="image/*" onChange={imageSelected} />
            </div>

            <div className="modal-field full-width">
              <label>Maps Location <span className="field-note">(select from maps)</span></label>
              <div className="map-location-row">
                <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Paste/select Google Maps location" required />
                <button type="button" className="secondary-button" onClick={() => update("location", "Selected map location")}>
                  <i className="fa-solid fa-map-location-dot" /> Select
                </button>
              </div>
            </div>

            <div className="modal-field full-width">
              <label>Street / Locality</label>
              <input value={form.street} onChange={(e) => update("street", e.target.value)} placeholder="Enter street or locality" required />
            </div>

            <div className="modal-field">
              <label>City / Town</label>
              <input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Enter city/town" required />
            </div>

            <div className="modal-field">
              <label>Pincode / Zipcode</label>
              <input value={form.pincode} onChange={(e) => update("pincode", e.target.value)} placeholder="Enter pincode/zipcode" required />
            </div>

            <div className="modal-field">
              <label>Country</label>
              <input value={form.country} onChange={(e) => update("country", e.target.value)} placeholder="Enter country" required />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="gold-button"><i className="fa-solid fa-plus" /> Add Store</button>
          </div>
        </form>
      </div>
    </div>
  );
}
