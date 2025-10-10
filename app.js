// Sample Data for AgriChainX Platform
const sampleData = {
    "producers": [
        {
            "id": "PROD001",
            "name": "Green Valley Farms",
            "location": "Punjab, India",
            "trust_score": 92,
            "certifications": ["Organic", "FSSAI", "Fair Trade"],
            "contact": "farmowner@greenvalley.in",
            "products": ["Rice", "Wheat", "Vegetables"]
        },
        {
            "id": "PROD002", 
            "name": "Fresh Harvest Co-op",
            "location": "Karnataka, India",
            "trust_score": 88,
            "certifications": ["FSSAI", "ISO 22000"],
            "contact": "manager@freshharvest.co.in",
            "products": ["Milk", "Dairy Products", "Fruits"]
        },
        {
            "id": "PROD003",
            "name": "Pure Grain Mills",
            "location": "Haryana, India", 
            "trust_score": 95,
            "certifications": ["Organic", "FSSAI", "BIS"],
            "contact": "quality@puregrainmills.com",
            "products": ["Flour", "Pulses", "Grains"]
        }
    ],

    "food_products": [
        {
            "batch_id": "BGV2024001",
            "product_name": "Basmati Rice Premium",
            "producer": "Green Valley Farms",
            "producer_id": "PROD001",
            "purity_score": 94,
            "ai_analysis": {
                "color_score": 96,
                "texture_score": 92,
                "contamination_risk": "Low",
                "authenticity": "Verified"
            },
            "harvest_date": "2024-09-15",
            "processing_date": "2024-09-18",
            "expiry_date": "2025-09-15",
            "blockchain_hash": "0x7b1e4a2f8c9d5e6f3a1b2c4d7e8f9a0b1c2d3e4f",
            "qr_code": "QR_BGV2024001",
            "certifications": ["Organic", "FSSAI"],
            "price_per_kg": 85
        },
        {
            "batch_id": "FHC2024002",
            "product_name": "Pure A2 Milk", 
            "producer": "Fresh Harvest Co-op",
            "producer_id": "PROD002",
            "purity_score": 91,
            "ai_analysis": {
                "fat_content": "4.2%",
                "protein_content": "3.4%",
                "adulterants": "None detected",
                "freshness": "Excellent"
            },
            "collection_date": "2024-10-04",
            "processing_date": "2024-10-04", 
            "expiry_date": "2024-10-07",
            "blockchain_hash": "0x9c5e7f1a3b8d2e6f4c9a1b7e3d5f8a2c6e9b4d1f",
            "qr_code": "QR_FHC2024002",
            "certifications": ["FSSAI"],
            "price_per_liter": 65
        },
        {
            "batch_id": "PGM2024003",
            "product_name": "Whole Wheat Flour",
            "producer": "Pure Grain Mills", 
            "producer_id": "PROD003",
            "purity_score": 97,
            "ai_analysis": {
                "gluten_content": "12.5%",
                "moisture": "11.2%",
                "ash_content": "1.1%",
                "quality_grade": "A+"
            },
            "milling_date": "2024-10-01",
            "packaging_date": "2024-10-02",
            "expiry_date": "2025-04-01", 
            "blockchain_hash": "0x4d8b2f7a1c9e5f3b6d1a8e4c7f2b9a5e8c3d6f1b",
            "qr_code": "QR_PGM2024003",
            "certifications": ["Organic", "FSSAI", "BIS"],
            "price_per_kg": 42
        }
    ],

    "supply_chain_events": [
        {
            "batch_id": "BGV2024001",
            "events": [
                {"stage": "Harvest", "date": "2024-09-15", "location": "Green Valley Farm, Punjab", "verified": true},
                {"stage": "Lab Testing", "date": "2024-09-16", "location": "National Food Testing Lab", "verified": true},
                {"stage": "Processing", "date": "2024-09-18", "location": "Processing Unit A", "verified": true},
                {"stage": "Packaging", "date": "2024-09-19", "location": "Packaging Facility", "verified": true},
                {"stage": "Distribution", "date": "2024-09-21", "location": "Central Warehouse", "verified": true}
            ]
        }
    ],

    "blockchain_transactions": [
        {
            "tx_hash": "0x7b1e4a2f8c9d5e6f3a1b2c4d7e8f9a0b1c2d3e4f",
            "batch_id": "BGV2024001",
            "timestamp": "2024-09-19T10:30:00Z",
            "gas_used": "21000",
            "status": "Confirmed",
            "block_number": "1847392"
        },
        {
            "tx_hash": "0x9c5e7f1a3b8d2e6f4c9a1b7e3d5f8a2c6e9b4d1f", 
            "batch_id": "FHC2024002",
            "timestamp": "2024-10-04T08:15:00Z",
            "gas_used": "21000", 
            "status": "Confirmed",
            "block_number": "1848156"
        }
    ]
};

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a nav link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Initialize navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section;
            showSection(sectionId);
        });
    });

    // Load initial data
    loadDashboardData();
    loadAnalyticsData();
    loadBlockchainData();
});

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load dashboard data
function loadDashboardData() {
    const productList = document.getElementById('productList');
    if (!productList) return;

    const products = sampleData.food_products;
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div class="product-info">
                <h4>${product.product_name}</h4>
                <p>Batch: ${product.batch_id} | Producer: ${product.producer}</p>
            </div>
            <div class="purity-badge">${product.purity_score}%</div>
        `;
        productList.appendChild(productElement);
    });
}

// Load analytics data
function loadAnalyticsData() {
    const trustLeaderboard = document.getElementById('trustLeaderboard');
    if (!trustLeaderboard) return;

    const producers = [...sampleData.producers].sort((a, b) => b.trust_score - a.trust_score);
    trustLeaderboard.innerHTML = '';

    producers.forEach((producer, index) => {
        const leaderElement = document.createElement('div');
        leaderElement.className = 'leader-item';
        leaderElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="leader-rank">${index + 1}</div>
                <div>
                    <div style="font-weight: 600;">${producer.name}</div>
                    <div style="color: #cccccc; font-size: 0.9rem;">${producer.location}</div>
                </div>
            </div>
            <div class="leader-score">${producer.trust_score}</div>
        `;
        trustLeaderboard.appendChild(leaderElement);
    });
}

// Load blockchain data
function loadBlockchainData() {
    const transactionList = document.getElementById('transactionList');
    if (!transactionList) return;

    const transactions = sampleData.blockchain_transactions;
    transactionList.innerHTML = '';

    transactions.forEach(tx => {
        const txElement = document.createElement('div');
        txElement.className = 'transaction-item';
        txElement.innerHTML = `
            <div class="tx-hash">${tx.tx_hash}</div>
            <div class="tx-details">
                <span>Batch: ${tx.batch_id}</span>
                <span>Block: ${tx.block_number}</span>
                <span>Gas: ${tx.gas_used}</span>
            </div>
        `;
        transactionList.appendChild(txElement);
    });
}

// ============================================
// AI ANALYSIS PROCESSING
// ============================================

function processUpload() {
    const productName = document.getElementById('productName').value;
    const batchId = document.getElementById('batchId').value;

    if (!productName || !batchId) {
        alert('Please fill in required fields');
        return;
    }

    // Show modal and start analysis
    const modal = document.getElementById('aiAnalysisModal');
    const loadingDiv = document.getElementById('analysisLoading');
    const resultsDiv = document.getElementById('analysisResults');

    modal.style.display = 'block';
    loadingDiv.style.display = 'block';
    resultsDiv.style.display = 'none';

    // Simulate AI processing
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        resultsDiv.style.display = 'block';

        // Generate random but realistic results
        const purityScore = Math.floor(Math.random() * 10) + 90; // 90-99
        const colorScore = Math.floor(Math.random() * 10) + 90;
        const textureScore = Math.floor(Math.random() * 15) + 85;

        document.getElementById('purityScore').textContent = purityScore;
        document.getElementById('colorScore').textContent = colorScore + '%';
        document.getElementById('textureScore').textContent = textureScore + '%';
        document.getElementById('contaminationRisk').textContent = purityScore > 95 ? 'Very Low' : 'Low';
        document.getElementById('authenticity').textContent = 'Verified';
    }, 3000);
}

// Create blockchain record
function createBlockchainRecord() {
    // Simulate blockchain transaction
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = '<div class="loading-spinner"></div><p>Creating blockchain record...</p>';
    loadingDiv.style.textAlign = 'center';
    loadingDiv.style.padding = '2rem';

    const resultsDiv = document.getElementById('analysisResults');
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(loadingDiv);

    setTimeout(() => {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="color: #00c851; font-size: 3rem; margin-bottom: 1rem;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="color: #00c851; margin-bottom: 1rem;">Blockchain Record Created!</h3>
                <p style="margin-bottom: 2rem;">Your product has been verified and recorded on the blockchain.</p>
                <div style="background: #333; padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                    <div style="color: #cccccc; font-size: 0.9rem; margin-bottom: 0.5rem;">Transaction Hash:</div>
                    <div style="color: #00c851; font-family: monospace; word-break: break-all;">0x${Math.random().toString(16).substr(2, 40)}</div>
                </div>
                <div style="background: #333; padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                    <div style="color: #cccccc; font-size: 0.9rem; margin-bottom: 0.5rem;">QR Code Generated:</div>
                    <div style="width: 100px; height: 100px; background: #555; margin: 0 auto; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-qrcode" style="font-size: 2rem; color: #00c851;"></i>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="closeModal()">
                    <i class="fas fa-check"></i>
                    Complete
                </button>
            </div>
        `;
    }, 2000);
}

// ============================================
// QR CODE SCANNING
// ============================================

function simulateScan() {
    // Simulate scanning delay
    const scanButton = document.querySelector('button[onclick="simulateScan()"]');
    scanButton.disabled = true;
    scanButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';

    setTimeout(() => {
        scanButton.disabled = false;
        scanButton.innerHTML = '<i class="fas fa-search"></i> Simulate Scan';

        // Show verification results
        showVerificationResults();
    }, 2000);
}

// Show verification results
function showVerificationResults() {
    const modal = document.getElementById('verificationModal');
    const content = document.getElementById('verificationContent');

    // Use first product as example
    const product = sampleData.food_products[0];
    const producer = sampleData.producers.find(p => p.id === product.producer_id);
    const chainEvents = sampleData.supply_chain_events.find(e => e.batch_id === product.batch_id);

    content.innerHTML = `
        <div class="product-header">
            <div class="product-image">
                <i class="fas fa-seedling"></i>
            </div>
            <div class="product-details">
                <h3>${product.product_name}</h3>
                <p><strong>Batch ID:</strong> ${product.batch_id}</p>
                <p><strong>Producer:</strong> ${producer.name}</p>
                <p><strong>Location:</strong> ${producer.location}</p>
                <div class="purity-score" style="margin-top: 1rem;">
                    <div class="score-circle">
                        <div class="score-number">${product.purity_score}</div>
                        <div class="score-label">Purity Score</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="verification-grid">
            <div class="card">
                <div class="card-header">
                    <h4>AI Analysis</h4>
                    <i class="fas fa-brain"></i>
                </div>
                <div class="analysis-details">
                    <div class="detail-item">
                        <span class="detail-label">Color Score:</span>
                        <span class="detail-value">${product.ai_analysis.color_score}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Texture Score:</span>
                        <span class="detail-value">${product.ai_analysis.texture_score}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Contamination Risk:</span>
                        <span class="detail-value status-low">${product.ai_analysis.contamination_risk}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Authenticity:</span>
                        <span class="detail-value status-verified">${product.ai_analysis.authenticity}</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Blockchain Verification</h4>
                    <i class="fas fa-cube"></i>
                </div>
                <div class="blockchain-info" style="padding: 1rem;">
                    <div style="margin-bottom: 1rem;">
                        <div style="color: #cccccc; font-size: 0.9rem;">Transaction Hash:</div>
                        <div style="color: #00c851; font-family: monospace; font-size: 0.8rem; word-break: break-all;">${product.blockchain_hash}</div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <div style="color: #cccccc; font-size: 0.9rem;">Status:</div>
                        <div style="color: #00c851; font-weight: 600;">✓ Verified on Blockchain</div>
                    </div>
                    <div>
                        <div style="color: #cccccc; font-size: 0.9rem;">Certifications:</div>
                        <div style="margin-top: 0.5rem;">
                            ${product.certifications.map(cert => `<span class="cert-badge">${cert}</span>`).join(' ')}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="supply-chain">
            <h4>Supply Chain Journey</h4>
            <div class="chain-timeline">
                ${chainEvents ? chainEvents.events.map(event => `
                    <div class="timeline-item">
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">${event.stage}</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">${event.location}</div>
                        </div>
                        <div>
                            <div style="color: #cccccc; font-size: 0.9rem; margin-bottom: 0.25rem;">${event.date}</div>
                            ${event.verified ? '<div class="verified-badge">✓ Verified</div>' : '<div style="color: #ff6b35;">Pending</div>'}
                        </div>
                    </div>
                `).join('') : '<p>No supply chain data available</p>'}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// ============================================
// MODAL CONTROLS
// ============================================

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// File upload handling
document.getElementById('imageUpload')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const uploadArea = document.querySelector('.file-upload');
        uploadArea.innerHTML = `
            <i class="fas fa-check-circle" style="color: #00c851;"></i>
            <span style="color: #00c851;">${file.name} uploaded successfully</span>
        `;
    }
});

// ============================================
// IMPROVED CHATBOT - Smart Responses + Features
// ============================================

(function() {
    'use strict';

    let userPreferences = {
        favoriteTopics: [],
        recentQueries: [],
        reminders: [],
        conversationState: null,
        waitingFor: null,
        tempData: {}
    };

    function loadUserPreferences() {
        try {
            const saved = localStorage.getItem('agriChainXPreferences');
            if (saved) {
                userPreferences = JSON.parse(saved);
            }
        } catch (e) {
            console.error('Error loading preferences:', e);
        }
    }

    function saveUserPreferences() {
        try {
            localStorage.setItem('agriChainXPreferences', JSON.stringify(userPreferences));
        } catch (e) {
            console.error('Error saving preferences:', e);
        }
    }

    function initWhenReady() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeChatbot);
        } else {
            initializeChatbot();
        }
    }

    function initializeChatbot() {
        console.log('🤖 Initializing chatbot...');

        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotContainer = document.getElementById('chatbotContainer');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotInput = document.getElementById('chatbotInput');
        const clearChat = document.getElementById('clearChat');

        if (!chatbotToggle || !chatbotContainer) {
            console.error('❌ Chatbot elements not found!');
            return;
        }

        console.log('✅ Chatbot elements found');

        // Open chatbot
        chatbotToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔵 Opening chatbot');
            chatbotContainer.classList.add('active');
            chatbotToggle.style.display = 'none';
        });

        // Close chatbot
        if (chatbotClose) {
            chatbotClose.addEventListener('click', function(e) {
                e.stopPropagation();
                closeChatbot();
            });
        }

        // Clear chat
        if (clearChat) {
            clearChat.addEventListener('click', function(e) {
                e.stopPropagation();
                clearChatMessages();
            });
        }

        // Click outside to close
        document.addEventListener('click', function(e) {
            if (chatbotContainer.classList.contains('active')) {
                if (!chatbotContainer.contains(e.target) && !chatbotToggle.contains(e.target)) {
                    closeChatbot();
                }
            }
        });

        // Prevent closing when clicking inside
        chatbotContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Send message
        if (chatbotSend) {
            chatbotSend.addEventListener('click', sendMessage);
        }

        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }

        // Scroll arrows
        setupScrollArrows();
        attachSuggestionListeners();
        loadUserPreferences();
        updateSuggestions();

        console.log('✅ Chatbot initialized!');
    }

    function closeChatbot() {
        console.log('🔴 Closing chatbot');
        const chatbotContainer = document.getElementById('chatbotContainer');
        const chatbotToggle = document.getElementById('chatbotToggle');

        chatbotContainer.classList.remove('active');
        chatbotToggle.style.display = 'flex';

        userPreferences.conversationState = null;
        userPreferences.waitingFor = null;
        userPreferences.tempData = {};
    }

    function clearChatMessages() {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        messagesContainer.innerHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    🔄 <strong>Chat Cleared!</strong><br><br>
                    How can I help you today?
                </div>
            </div>
        `;

        userPreferences.conversationState = null;
        userPreferences.waitingFor = null;
        userPreferences.tempData = {};

        console.log('🗑️ Chat cleared');
    }

    function setupScrollArrows() {
        const container = document.getElementById('chatbotSuggestions');
        const leftArrow = document.getElementById('scrollLeft');
        const rightArrow = document.getElementById('scrollRight');

        if (!container || !leftArrow || !rightArrow) return;

        leftArrow.addEventListener('click', function() {
            container.scrollBy({ left: -150, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', function() {
            container.scrollBy({ left: 150, behavior: 'smooth' });
        });
    }

    function attachSuggestionListeners() {
        const suggestionChips = document.querySelectorAll('.suggestion-chip');
        suggestionChips.forEach(function(chip) {
            chip.addEventListener('click', function() {
                const input = document.getElementById('chatbotInput');
                if (input) {
                    input.value = chip.textContent;
                    sendMessage();
                }
            });
        });
    }

    function sendMessage() {
        const input = document.getElementById('chatbotInput');
        if (!input) return;

        const message = input.value.trim();
        if (!message) return;

        console.log('📤 Sending:', message);

        addMessage(message, 'user');
        input.value = '';

        userPreferences.recentQueries.unshift(message);
        userPreferences.recentQueries = userPreferences.recentQueries.slice(0, 10);

        showTypingIndicator();

        setTimeout(function() {
            hideTypingIndicator();
            const response = processMessage(message);
            addMessage(response, 'bot');
            updateSuggestions();
            saveUserPreferences();
        }, 1500);
    }

    function showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        const existing = document.querySelector('.typing-indicator-wrapper');
        if (existing) existing.remove();

        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-wrapper';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator active">
                <div class="buffer-icon"></div>
                <span>Thinking...</span>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingWrapper = document.querySelector('.typing-indicator-wrapper');
        if (typingWrapper) {
            typingWrapper.remove();
        }
    }

    function addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + sender + '-message';

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = text;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        messagesContainer.appendChild(messageDiv);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function processMessage(message) {
        const lowerMsg = message.toLowerCase();

        // Handle conversation states first
        if (userPreferences.waitingFor) {
            return handleFollowUp(message);
        }

        // Check status
        if (lowerMsg.includes('status')) {
            userPreferences.conversationState = 'checking_status';
            userPreferences.waitingFor = 'status_query';
            return "📦 <strong>Check Status</strong><br><br>What would you like to check the status of?<br><br>Examples: Product verification, Batch processing, Quality check";
        }

        // Set reminder
        if (lowerMsg.includes('reminder')) {
            userPreferences.conversationState = 'setting_reminder';
            userPreferences.waitingFor = 'reminder_datetime';
            return "⏰ <strong>Set Reminder</strong><br><br>When should I remind you?<br><br>Examples:<br>• Tomorrow 9:00 AM<br>• Oct 15 3:00 PM<br>• Next week 10:30 AM";
        }

        // Report complaint
        if (lowerMsg.includes('complaint')) {
            userPreferences.conversationState = 'reporting_complaint';
            userPreferences.waitingFor = 'complaint_description';
            return "📝 <strong>Report Complaint</strong><br><br>Please describe your complaint or issue:";
        }

        // Analytics
        if (lowerMsg.includes('analytic') || lowerMsg.includes('report') || lowerMsg.includes('dashboard')) {
            return "📊 <strong>Analytics</strong><br><br>You can view:<br>• Trust Score Leaderboard<br>• Food Impact Analysis<br>• Verification trends<br><br>Click the Analytics tab!";
        }

        // Verification
        if (lowerMsg.includes('verify') || lowerMsg.includes('verification') || lowerMsg.includes('authenticate')) {
            return "✅ <strong>Verification</strong><br><br>Our process includes:<br>• AI-powered analysis<br>• Blockchain records<br>• Lab testing<br>• Real-time scoring";
        }

        // Purity score
        if (lowerMsg.includes('purity') || lowerMsg.includes('score') || lowerMsg.includes('rating')) {
            return "🎯 <strong>Purity Scores</strong><br><br>• 90-100: Excellent<br>• 75-89: Good<br>• 60-74: Fair<br>• Below 60: Poor<br><br>Platform average: 95%";
        }

        // Upload
        if (lowerMsg.includes('upload') || lowerMsg.includes('submit') || lowerMsg.includes('add product')) {
            return "📤 <strong>Upload Product</strong><br><br>Steps:<br>1. Go to 'Upload Data'<br>2. Enter product details<br>3. Upload image<br>4. Add test data<br>5. Click 'Analyze'";
        }

        // Scan/QR
        if (lowerMsg.includes('scan') || lowerMsg.includes('qr')) {
            return "📱 <strong>QR Scanner</strong><br><br>Features:<br>• Instant verification<br>• Supply chain history<br>• Purity scores<br>• Certifications<br><br>Go to 'Scan Product'!";
        }

        // Blockchain
        if (lowerMsg.includes('blockchain') || lowerMsg.includes('chain') || lowerMsg.includes('hash')) {
            return "⛓️ <strong>Blockchain</strong><br><br>Every product includes:<br>• Unique hash<br>• Timestamp<br>• Producer info<br>• Verification results<br><br>Check Blockchain Explorer!";
        }

        // Food safety
        if (lowerMsg.includes('safe') || lowerMsg.includes('contamination') || lowerMsg.includes('adulteration')) {
            return "🛡️ <strong>Food Safety</strong><br><br>Common issues we detect:<br>• Milk adulteration<br>• Fake spices<br>• Counterfeit products<br>• Pesticide residue<br><br>Our AI identifies these!";
        }

        // Trust score
        if (lowerMsg.includes('trust') || lowerMsg.includes('leaderboard')) {
            return "🏆 <strong>Trust Score</strong><br><br>Top producers:<br>• Pure Grain Mills: 95<br>• Green Valley Farms: 92<br>• Fresh Harvest Co-op: 88<br><br>Check Analytics for full list!";
        }

        // Producer
        if (lowerMsg.includes('producer') || lowerMsg.includes('supplier') || lowerMsg.includes('farmer')) {
            return "👨‍🌾 <strong>Producers</strong><br><br>We verify producers based on:<br>• Product quality<br>• Consistency<br>• Lab results<br>• Customer feedback<br><br>View Dashboard for details!";
        }

        // Help
        if (lowerMsg.includes('help') || lowerMsg === '?') {
            return "💡 <strong>How I Can Help</strong><br><br>📦 Check status<br>⏰ Set reminders<br>📝 Report complaints<br>📊 View analytics<br>✅ Verification info<br>🎯 Purity scores";
        }

        // Greeting
        if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
            return "👋 <strong>Hello!</strong><br><br>I'm your AgriChainX assistant. How can I help you today?";
        }

        // Thanks
        if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
            return "😊 You're welcome! Anything else I can help with?";
        }

        // Default - smart response based on keywords
        if (lowerMsg.includes('what') || lowerMsg.includes('how') || lowerMsg.includes('why')) {
            return "🤔 <strong>I can help with:</strong><br><br>• Product verification<br>• Status checking<br>• Setting reminders<br>• Reporting issues<br><br>Try: 'Check status' or 'Help'";
        }

        // Generic fallback
        return "💬 <strong>I understand you're asking about:</strong> '" + message + "'<br><br>Try:<br>• 'Check status'<br>• 'Set reminder'<br>• 'Report complaint'<br>• 'Help'";
    }

    function handleFollowUp(message) {
        const state = userPreferences.conversationState;
        const waitingFor = userPreferences.waitingFor;

        // Status flow
        if (state === 'checking_status' && waitingFor === 'status_query') {
            const statuses = ['✅ Completed', '⏳ In Progress', '🔄 Processing', '❌ Failed', '⚠️ Pending Review'];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            const progress = Math.floor(Math.random() * 100) + 1;

            userPreferences.conversationState = null;
            userPreferences.waitingFor = null;

            return "📊 <strong>Status Update</strong><br><br>Query: <strong>" + message + "</strong><br><br>Status: " + randomStatus + "<br>Progress: " + progress + "%<br>Last updated: Just now<br><br>Need anything else?";
        }

        // Reminder - Step 1: Got date/time
        if (state === 'setting_reminder' && waitingFor === 'reminder_datetime') {
            userPreferences.tempData.datetime = message;
            userPreferences.waitingFor = 'reminder_task';
            return "📝 <strong>What should I remind you about?</strong><br><br>Enter task description:";
        }

        // Reminder - Step 2: Got task
        if (state === 'setting_reminder' && waitingFor === 'reminder_task') {
            const datetime = userPreferences.tempData.datetime;
            const task = message;

            const reminder = {
                id: Date.now(),
                datetime: datetime,
                task: task,
                created: new Date().toISOString()
            };

            userPreferences.reminders.push(reminder);
            userPreferences.conversationState = null;
            userPreferences.waitingFor = null;
            userPreferences.tempData = {};

            saveUserPreferences();

            return "✅ <strong>Reminder Set!</strong><br><br>📅 Date & Time: <strong>" + datetime + "</strong><br>📝 Task: <strong>" + task + "</strong><br><br>I'll notify you then! 🔔";
        }

        // Complaint flow
        if (state === 'reporting_complaint' && waitingFor === 'complaint_description') {
            const complaintId = 'CMP-' + Date.now();

            userPreferences.tempData.lastComplaint = {
                id: complaintId,
                description: message,
                timestamp: new Date().toISOString()
            };

            userPreferences.conversationState = null;
            userPreferences.waitingFor = null;

            saveUserPreferences();

            return "✅ <strong>Complaint Reported</strong><br><br>ID: <strong>" + complaintId + "</strong><br><br>Description: <em>" + message + "</em><br><br>Thank you for your feedback!<br>Our team will review this shortly.";
        }

        return "🤔 I didn't quite get that. Can you try again?";
    }

    function updateSuggestions() {
        const suggestionsContainer = document.getElementById('chatbotSuggestions');
        if (!suggestionsContainer) return;

        const suggestions = [
            'Check status',
            'Set reminder', 
            'Report complaint',
            'Analytics',
            'Verification',
            'Purity scores',
            'Upload product',
            'Help'
        ];

        suggestionsContainer.innerHTML = suggestions.map(function(s) {
            return '<div class="suggestion-chip">' + s + '</div>';
        }).join('');

        attachSuggestionListeners();
    }

    initWhenReady();

})();