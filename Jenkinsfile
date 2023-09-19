pipeline {
    agent { 
        node {
            label 'linux_41'
            }
      }
    triggers {
        pollSCM 'H/2 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                npm install
                node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
                export NODE_OPTIONS="--max-old-space-size=8192"
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                touch bcdoc-test.txt
                rm bcdoc-*.*
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                aws --profile JenkinsAPIDOCSS3Bucket s3 sync build s3://bcapidocs-dev
                zip -r "bcdoc-${BUILD_ID}.zip" build
                '''
            }
        }
    }
}