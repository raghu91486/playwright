pipeline {
    agent any
    
    tools {
        nodejs 'Node-20'
    }
    
    environment {
        // Set CI environment variable for Playwright
        CI = 'true'
        // Prevent Playwright from downloading browsers if already installed
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm ci'
            }
        }
        
        stage('Install Playwright Browsers') {
            steps {
                echo 'Installing Playwright browsers...'
                sh 'npx playwright install --with-deps chromium'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                echo 'Running Playwright tests...'
                sh 'npx playwright test --project=chromium'
            }
        }
        

    }
    
    post {
        always {
            echo 'Archiving test artifacts...'
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'screenshots/**/*', allowEmptyArchive: true
            
            // Clean up workspace
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: 'node_modules/**', type: 'INCLUDE']])
        }
        
        success {
            echo '✅ All tests passed successfully!'
        }
        
        failure {
            echo '❌ Tests failed. Check the Playwright Test Report for details.'
        }
        
        unstable {
            echo '⚠️ Tests completed with warnings.'
        }
    }
}

