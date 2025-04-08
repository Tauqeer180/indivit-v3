import Link from 'next/link'
import React from 'react'

export default function ConfirmDeletePopup({ data }: { data?: any }) {
  return (
    <div>
      <div
        className="modal fade"
        id="confirmDeleteModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5 pt-0 position-relative">
              <div className="">
                <h4>Are you sure?</h4>
                <p>You remove the box My Box 1, this action cannot be undone.</p>
              </div>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-primary btn-outline-success"
              >
                Not Now
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="btn btn-primary btn-solid-success">
                <Link href="/discoverrecipes">Yes Delete</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
