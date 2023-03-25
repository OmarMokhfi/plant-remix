function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="py-4 text-sm text-center text-gray-200 bg-gray-800 mt-24">
      &copy; Copyright {currentYear} Verto. All Rights Reserved
    </footer>
  );
}

export default Footer;
