import { motion } from "motion/react";
import { Heart, Calendar, Star, Sparkles, MessageCircle, Coffee, Wine, Home } from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const events: TimelineEvent[] = [
  {
    date: "25/11/2023",
    title: "Tin Nhắn Đầu Tiên",
    description: "Dòng tin nhắn đầu tiên bắt đầu câu chuyện của chúng ta",
    icon: <MessageCircle className="text-blue-400" size={24} />,
    imageUrl: "/images/20231105-1.png"

  },
  {
    date: "26/01/2024",
    title: "Gặp Lần Đầu",
    description: "Khoảnh khắc định mệnh, khi mắt anh chạm mắt em",
    icon: <Sparkles className="text-pink-400" size={24} />,
    imageUrl: "/images/20240126-1.png" 
  },
  
  {
    date: "19/03/2024",
    title: "Lần Đầu Nấu Mì Cho Em",
    description: "Bát mì đơn giản nhưng đầy yêu thương",
    icon: <Coffee className="text-orange-400" size={24} />,
    imageUrl: "/images/20241903-1.jpg"
  },
  {
    date: "21/03/2024",
    title: "Lần Đầu Qua Phòng Ôm Ngủ",
    description: "Đêm đầu tiên được ôm em trong vòng tay",
    icon: <Home className="text-purple-400" size={24} />,
    imageUrl: "/images/20242103-1.jpg"
  },
  {
    date: "06/04/2024",
    title: "Lần Đầu Uống Rượu Cùng Nhau Ở Phòng Em",
    description: "Những câu chuyện và tiếng cười bên ly rượu",
    icon: <Wine className="text-red-400" size={24} />,
    imageUrl: "/images/20240406-1.jpg"
  },
 
  {
    date: "03/08/2024",
    title: "Ngày Tỏ Tình",
    description: "Ngày anh chính thức nói 'Anh có tình cảm với em' ❤️",
    icon: <Star className="text-yellow-400 fill-yellow-400" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop&auto=format"
  },
   {
    date: "02/06/2024",
    title: "Đồng Ý Làm Người Yêu",
    description: "Ngày em nói 'Em đồng ý' - ngày chính thức bắt đầu 💕",
    icon: <Heart className="text-red-400 fill-red-400" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&auto=format"
  },
  {
    date: "20/05/2026",
    title: "Chuyến Đi Đà Nẵng của chúng ta",
    description: "Kỷ niệm tuyệt vời tại thành phố biển 🌊",
    icon: <Calendar className="text-purple-400" size={24} />,
    imageUrl: "/images/20260521-1.jpg"
  }
];

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-200 to-pink-200" />

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-white rounded-full border-4 border-pink-200 shadow-lg flex items-center justify-center z-10">
              {event.icon}
            </div>

            <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${
              index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
            }`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedEvent(event)}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <p className="text-pink-500 mb-2 hover:underline" style={{ fontFamily: 'var(--font-display)' }}>
                  {event.date} 📸
                </p>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {event.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                  {event.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog Popup */}
      <Dialog.Root open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 max-w-2xl w-[90vw] max-h-[90vh] overflow-auto z-50 shadow-2xl animate-in fade-in zoom-in-95">
            <Dialog.Close className="absolute top-4 right-4 w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors">
              <X className="text-pink-600" size={24} />
            </Dialog.Close>

            {selectedEvent && (
              <div className="space-y-6">
                <div className="text-center">
                  <Dialog.Title className="text-3xl text-pink-500 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedEvent.title}
                  </Dialog.Title>
                  <p className="text-pink-400" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedEvent.date}
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    className="w-full h-auto max-h-[60vh] object-cover"
                  />
                </div>

                <Dialog.Description className="text-center text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                  {selectedEvent.description}
                </Dialog.Description>

                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-pink-300 fill-pink-300" />
                  ))}
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
