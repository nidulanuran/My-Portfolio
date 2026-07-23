function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#00d4ff]/10" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00d4ff] border-r-[#7c3aed] animate-spin" />
      </div>
    </div>
  )
}

export default Loader