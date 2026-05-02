import {
  ArrowRight,
  FileText,
  Lock,
  MessageSquare,
  Star,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: FileText,
    title: "Upload & Share",
    desc: "Share PDFs, Word docs, PowerPoints, and images with full access control.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Grant access to paid documents using unique 8-character tokens.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    desc: "Contact resource owners and build professional connections.",
  },
  {
    icon: Star,
    title: "Trust Ratings",
    desc: "Build credibility through peer ratings and feedback.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    desc: "Search documents by title, type, or category instantly.",
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    desc: "Track downloads and engagement metrics in real time.",
  },
];

export default function Home({ openAuth }) {
  const handleOpenAuth = (type) => {
    if (openAuth) openAuth(type);
  };

  return (
    <div className="w-full bg-background text-foreground">
      {/* HERO */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-background via-background to-muted/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 md:px-6 relative z-10 items-center">
          <div>
            <div className="inline-block mb-6 px-3 py-1 bg-muted rounded-full border border-border">
              <span className="text-sm font-medium text-muted-foreground">
                Join 3,800+ professionals sharing resources
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-balance">
              Share knowledge.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Build bridges.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Resource Bridge is where professionals share, discover, and
              monetize documents securely. Connect, collaborate, and grow your
              network.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                onClick={() => handleOpenAuth("register")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 group"
              >
                Start for Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => handleOpenAuth("login")}
                variant="outline"
                size="lg"
                className="font-semibold"
              >
                Browse Resources
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "12.4K", label: "Documents" },
                { val: "3.8K", label: "Users" },
                { val: "89.2K", label: "Downloads" },
                { val: "4.8★", label: "Rating" },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {item.val}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 lg:h-full lg:min-h-96 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 backdrop-blur-sm"></div>
            <div className="absolute inset-4 bg-white/40 rounded-xl border border-white/20 flex flex-col items-center justify-center p-8">
              <div className="space-y-4 w-full">
                <div className="h-12 bg-primary/20 rounded-lg flex items-center px-4">
                  <FileText className="w-5 h-5 text-primary mr-3" />
                  <div className="h-2 bg-primary/10 rounded flex-1"></div>
                </div>
                <div className="h-12 bg-primary/15 rounded-lg flex items-center px-4">
                  <Lock className="w-5 h-5 text-accent mr-3" />
                  <div className="h-2 bg-primary/10 rounded flex-1"></div>
                </div>
                <div className="h-12 bg-primary/20 rounded-lg flex items-center px-4">
                  <Star className="w-5 h-5 text-primary mr-3" />
                  <div className="h-2 bg-primary/10 rounded flex-1"></div>
                </div>
                <div className="h-12 bg-primary/15 rounded-lg flex items-center px-4">
                  <MessageSquare className="w-5 h-5 text-accent mr-3" />
                  <div className="h-2 bg-primary/10 rounded flex-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete platform designed for professional document sharing and
              collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-5 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/95 via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
            Ready to start sharing?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of professionals monetizing their knowledge and
            building meaningful connections.
          </p>

          <Button
            onClick={() => handleOpenAuth("register")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold gap-2 group"
          >
            Create Free Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}
