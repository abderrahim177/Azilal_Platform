
import { useState } from "react";
import { Award, Plus, Trash2, FileText } from "lucide-react";

export default function GuideCertificates() {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: "Mountain Guide Certificate",
      description: "Professional mountain guiding",
      file: "",
    },
  ]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setCertificates((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        description: description.trim(),
        file: fileName,
      },
    ]);

    setName("");
    setDescription("");
    setFileName("");
  };

  const handleDelete = (id) => {
    setCertificates((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-slate-900">
          Professional Certificates
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Add your certifications and professional documents.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
      >
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">
            Certificate name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Mountain Guide Certificate"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[#26372d] focus:ring-1 focus:ring-[#26372d]"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your certification..."
            rows={2}
            className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[#26372d] focus:ring-1 focus:ring-[#26372d]"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">
            Certificate document (optional)
          </label>

          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs text-slate-500 file:mr-3 file:rounded-md file:border-0 file:bg-[#26372d] file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white"
          />

          {fileName && (
            <p className="mt-2 text-xs text-slate-500">{fileName}</p>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-[#26372d] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#34483b]"
        >
          <Plus size={16} />
          Add Certificate
        </button>
      </form>

      {/* Certificates list */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Your Certificates
          </h3>

          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
            {certificates.length}
          </span>
        </div>

        {certificates.length === 0 ? (
          <p className="py-5 text-center text-xs text-slate-400">
            No certificates added yet.
          </p>
        ) : (
          <div className="space-y-2">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-slate-100 p-3 transition hover:bg-slate-50"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                    <Award size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800">
                      {certificate.name}
                    </p>

                    {certificate.description && (
                      <p className="mt-1 text-xs text-slate-500">
                        {certificate.description}
                      </p>
                    )}

                    {certificate.file && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                        <FileText size={13} />
                        {certificate.file}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(certificate.id)}
                  className="rounded-md p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label="Delete certificate"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
