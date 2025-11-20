import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-foreground">Санаторий Руно</h1>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-primary-foreground hover:text-secondary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('benefits')} className="text-primary-foreground hover:text-secondary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('faq')} className="text-primary-foreground hover:text-secondary transition-colors">Вопросы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-primary-foreground hover:text-secondary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/872c68bb-d340-4f06-8fb6-158fe4e9a980/files/7d14c82d-d22a-4894-ad28-78860f7428f8.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-2xl animate-snowfall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              ❄
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Незабываемый Новый год в санатории Руно
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-8 animate-fade-in drop-shadow" style={{ animationDelay: '0.2s' }}>
              Праздничный банкет, лечебные процедуры и зимнее волшебство в Пятигорске
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold text-lg px-8 py-6 shadow-xl">
                <Icon name="Calendar" className="mr-2" />
                Забронировать отдых
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur shadow-xl">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Погрузитесь в атмосферу Нового года
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Новый год — отличное время обновить здоровье и зарядиться энергией в санатории Руно
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Оздоровительные процедуры</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Комплексные лечебные программы для укрепления здоровья и восстановления сил
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Зимний банкет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Праздничное меню с традиционными блюдами и фирменными деликатесами от шеф-повара
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Music" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Развлекательные мероприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Концертная программа, конкурсы, живая музыка и танцы до утра
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Snowflake" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Зимний отдых</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Прогулки по заснеженному парку, горячий чай у камина и зимние развлечения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Home" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Всё для вашего уюта</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Комфортабельные номера с видом на горы, Wi-Fi, парковка и внимательный персонал
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Gift" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Новогодние услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Специальные новогодние пакеты с подарками, сюрпризами и праздничным декором
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Новогодняя программа
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">31 декабря</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Заселение и приветственный коктейль</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Новогодний банкет с шампанским</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Праздничная шоу-программа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Танцы и дискотека до утра</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Sun" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">1-7 января</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Ежедневные лечебные процедуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Трёхразовое питание по системе шведский стол</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Развлекательные мероприятия и экскурсии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Доступ к бассейну и SPA-зоне</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Ответы на вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Всё, что нужно знать о новогоднем отдыхе в санатории Руно
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  Будет ли праздничный банкет на Новый год в санатории Руно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Да, мы организуем роскошный праздничный банкет 31 декабря с разнообразным меню, включающим горячие блюда, салаты, закуски, десерты и напитки. Шампанское, живая музыка и праздничная атмосфера гарантированы!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  Можно ли совместить участие в новогодней программе с лечением и оздоровлением?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Конечно! Это одно из главных преимуществ отдыха в санатории. Вы можете сочетать праздничные мероприятия с полноценным лечебным курсом: минеральные ванны, физиотерапия, массаж и другие процедуры доступны ежедневно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  Входит ли проживание и лечение в стоимость новогоднего пакета?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Да, новогодний пакет включает проживание в комфортабельном номере, трёхразовое питание, базовый курс лечебных процедур, участие в новогоднем банкете и развлекательной программе. Дополнительные процедуры оплачиваются отдельно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  Какие праздничные мероприятия проходят в санатории в новогоднюю ночь?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  В новогоднюю ночь вас ждёт грандиозная шоу-программа с живой музыкой, выступлениями артистов, конкурсами с призами, танцами и дискотекой. Для детей — визит Деда Мороза и Снегурочки с подарками. Праздник продолжается до утра!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Забронируйте незабываемый отдых
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Проведите незабываемый Новый год с лечением и праздничным банкетом в санатории Руно, Пятигорск
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Phone" size={24} />
                    Телефоны
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:+78793390266" className="block text-lg hover:text-accent transition-colors">
                    +7 (879) 339-02-66
                  </a>
                  <a href="tel:+78793392291" className="block text-lg hover:text-accent transition-colors">
                    +7 (879) 339-22-91
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Mail" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:runo@donagrok.ru" className="block text-lg hover:text-accent transition-colors">
                    runo@donagrok.ru
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="MapPin" size={24} />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Филиал-Санаторий "РУНО" СХК "ДонАгроКурорт"<br />
                    г. Пятигорск, пр-кт Кирова, 28
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" />
                Позвонить сейчас
              </Button>
              <p className="text-white/80">Мы в социальных сетях</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Санаторий Руно. Новогодний отдых в Пятигорске с лечением и праздничным банкетом
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
