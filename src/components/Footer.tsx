const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About GOV.PH</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Government</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Executive</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Legislative</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Judiciary</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social Media</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Hotlines</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Disaster Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">COVID-19 Updates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© 2023 Republic of the Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;