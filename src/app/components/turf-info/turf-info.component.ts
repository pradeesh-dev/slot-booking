// turf-info.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Game {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface TurfInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  image: string;
  hours: string;
  guidelines: string[];
  mapUrl: string;
}

@Component({
  selector: 'app-turf-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './turf-info.component.html',
  styleUrls: ['./turf-info.component.scss']
})
export class TurfInfoComponent implements OnInit, OnDestroy {
  turf: TurfInfo = {
    name: 'United Sports Turf',
    address: '2nd Cross, Amman Nagar Ext, Kattur, Trichy-620019',
    phone: '+919876543210',
    whatsapp: 'https://wa.me/919876543210',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
    hours: '5:00 AM - 10:00 PM',
    guidelines: [
      'Minimum 4 members required',
      '₹50 per person per hour',
      'Booking confirmed via WhatsApp',
      'Non-marking shoes mandatory',
    ],
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.79083635146072,78.75734337486288'
  };

  games: Game[] = [
    {
      id: 'karate',
      name: 'Karate Coaching',
      description: 'Professional Karate coaching for all ages and skill levels. Join our classes to learn from certified instructors.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop'
    },
    {
      id: 'cricket',
      name: 'Cricket Net Practice',
      description: 'Practice your cricket skills in our well-maintained nets. Perfect for individuals and teams.',
      price: 50,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop'
    },
    {
      id: 'football',
      name: 'Football Coaching',
      description: 'Join our football coaching sessions and improve your game with expert trainers.',
      price: 50,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop'
    }
  ];

  contact: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  safeMapUrl: SafeResourceUrl;

  private observer?: IntersectionObserver;

  public currentYear: number = new Date().getFullYear();

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9!2d78.7573!3d10.7908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI3LjAiTiA3OMKwNDUnMjYuNCJF!5e0!3m2!1sen!2sin!4v1'
    );
  }

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  trackByGameId(index: number, game: Game): string {
    return game.id;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  bookGame(gameName: string): void {
    const message = `Hi! I am interested in ${gameName}. Please provide me with more details.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  async submitContact(): Promise<void> {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically call your API service
      console.log('Contact form submitted:', this.contact);
      
      // Reset form
      this.contact = { name: '', email: '', message: '' };
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }

  private setupScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(el => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(30px)';
        htmlEl.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        this.observer?.observe(el);
      });
    }, 100);
  }
}