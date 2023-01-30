pipeline {
    agent { 
        node {
            label 'docker-agent-nodejs'
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
                zip -r "bcdoc-${BUILD_ID}.zip" build
                npm run server
                aws --profile JenkinsAPIDOCSS3Bucket s3 sync build s3://bcapidocs-dev
                '''
            }
        }
    }
}