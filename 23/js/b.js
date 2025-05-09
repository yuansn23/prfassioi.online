 
        // LINEへのリダイレクト関数
        function opensite() {
            window.open('https://line.me/ti/p/~your-line-id', '_blank');
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            // アニメーション関連の関数
            function initAnimations() {
                // LINE固定アイコンのアニメーション
                const lineIcon = document.querySelector('.line-icon-fixed');
                setTimeout(() => {
                    lineIcon.style.transform = 'translateY(-50%)';
                    lineIcon.style.animation = 'pulse 2s infinite';
                }, 2000);
                
                // 強化された呼吸フローティングボタンのアニメーション
                const floatingBtn = document.querySelector('#pulsingButton');
                floatingBtn.style.animation = 'enhancedPulse 1.5s infinite';
            }
            
            // シャインエフェクト
            function initShineEffects() {
                const buttons = document.querySelectorAll('.line-btn');
                buttons.forEach(button => {
                    setInterval(() => {
                        createShineEffect(button);
                    }, 5000);
                });
                
                // 特別にフローティングボタンにもシャインエフェクトを追加
                const floatingBtn = document.querySelector('#pulsingButton');
                setInterval(() => {
                    createShineEffect(floatingBtn);
                }, 3000); // フローティングボタンはより頻繁にシャインエフェクト
            }
            
            function createShineEffect(button) {
                const btnElem = button;
                btnElem.style.position = 'relative';
                btnElem.style.overflow = 'hidden';
                
                const shine = document.createElement('div');
                shine.style.position = 'absolute';
                shine.style.top = '0';
                shine.style.left = '-100%';
                shine.style.width = '100%';
                shine.style.height = '100%';
                shine.style.background = 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)';
                shine.style.animation = 'shine 1s linear';
                
                btnElem.appendChild(shine);
                
                setTimeout(() => {
                    if (btnElem.contains(shine)) {
                        btnElem.removeChild(shine);
                    }
                }, 1000);
            }
            
            // スクロールアニメーション
            function initScrollAnimations() {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: "0px 0px -100px 0px"
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                document.querySelectorAll('.strategy-item, .testimony-image img, .opportunity-image').forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(50px)';
                    el.style.transition = 'all 0.6s ease-out';
                    observer.observe(el);
                });
            }
            
            // 全てのアニメーション初期化
            initAnimations();
            initShineEffects();
            initScrollAnimations();
        }); 