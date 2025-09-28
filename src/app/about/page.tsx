import PageTransition from '@/components/animations/PageTransition'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import AnimatedCard from '@/components/animations/AnimatedCard'

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0F0F0F]">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg shadow-2xl overflow-hidden">
              {/* Header Section */}
              <div className="relative bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#1F1F1F] px-8 py-12 overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <FadeInWhenVisible delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h1>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible delay={0.4}>
                    <p className="text-xl text-[#E5E5E5]">
                      デザイナーからフロントエンドエンジニアへの転身ストーリー
                    </p>
                  </FadeInWhenVisible>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 py-12">
                <div className="prose prose-lg max-w-none">
                  <FadeInWhenVisible delay={0.6}>
                    <h2 className="text-2xl font-bold text-white mb-6">プロフィール</h2>
                  </FadeInWhenVisible>

                <div className="mb-8">
                  <p className="text-[#E5E5E5] mb-4 leading-relaxed">
                    8年間のフリーランスデザイナーとしての経験を経て、2.5年前にフロントエンドエンジニアに転身しました。
                    デザインとエンジニアリング両方の視点を持つことで、より良いユーザー体験を提供することを目指しています。
                  </p>
                  <p className="text-[#E5E5E5] mb-4 leading-relaxed">
                    UI/UXデザインの知識を活かしながら、技術的な実装にも深く関わることで、
                    デザインと開発の橋渡し役として価値を提供しています。
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">経験・スキル</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-white/5 to-[#1F1F1F] border border-white/20 rounded-lg p-6 hover:border-white/40 transition-all duration-300">
                    <h4 className="font-semibold text-[#E5E5E5] mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#E5E5E5] rounded-full mr-2 shadow-lg shadow-white/20"></span>
                      デザイン経験（8年）
                    </h4>
                    <ul className="space-y-2 text-[#E5E5E5]">
                      <li className="flex items-start">
                        <span className="text-[#E5E5E5] mr-2 mt-1">•</span>
                        ブランディング・アイデンティティデザイン
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E5E5E5] mr-2 mt-1">•</span>
                        Webデザイン・UIデザイン
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E5E5E5] mr-2 mt-1">•</span>
                        ユーザビリティを考慮したUXデザイン
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E5E5E5] mr-2 mt-1">•</span>
                        クライアントとの要件定義・提案
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-[#1F1F1F] border border-gray-500/20 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300">
                    <h4 className="font-semibold text-[#A1A1A1] mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#A1A1A1] rounded-full mr-2 shadow-lg shadow-white/20"></span>
                      エンジニア経験（2.5年）
                    </h4>
                    <ul className="space-y-2 text-[#E5E5E5]">
                      <li className="flex items-start">
                        <span className="text-[#A1A1A1] mr-2 mt-1">•</span>
                        Next.js・Reactを使用したフロントエンド開発
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1A1] mr-2 mt-1">•</span>
                        TypeScriptによる型安全な開発
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1A1] mr-2 mt-1">•</span>
                        レスポンシブWebデザインの実装
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1A1] mr-2 mt-1">•</span>
                        CMSとの連携・API開発
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">提供できる価値</h3>

                <div className="bg-gradient-to-r from-[#1A1A1A] to-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 mb-8">
                  <ul className="space-y-3 text-[#E5E5E5]">
                    <li className="flex items-start">
                      <span className="text-[#E5E5E5] mr-3 mt-1 text-lg">✓</span>
                      <span>デザインの意図を理解した、高品質なフロントエンド実装</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E5E5E5] mr-3 mt-1 text-lg">✓</span>
                      <span>ユーザビリティを考慮したインターフェース設計</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E5E5E5] mr-3 mt-1 text-lg">✓</span>
                      <span>デザイナーとエンジニア間のコミュニケーション促進</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E5E5E5] mr-3 mt-1 text-lg">✓</span>
                      <span>プロトタイプから本格実装まで一貫した開発プロセス</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">今後の目標</h3>

                <div className="space-y-4">
                  <p className="text-[#E5E5E5] leading-relaxed">
                    フロントエンドエンジニアとしてのスキルをさらに深めながら、
                    デザインシステムの構築やアクセシビリティの向上など、
                    より良いユーザー体験の実現に貢献していきたいと考えています。
                  </p>

                  <p className="text-[#E5E5E5] leading-relaxed">
                    また、デザインとエンジニアリングの知識を活かして、
                    チーム全体の生産性向上にも寄与していければと思います。
                  </p>
                </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
