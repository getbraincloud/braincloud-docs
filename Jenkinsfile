pipeline {
    agent { 
        node {
            label 'flutter&&linux'
            }
        }
    stages {
        stage('Build') {
            steps {
                echo "Building..."
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                npm install --legacy-peer-deps
                node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
                export NODE_OPTIONS="--max-old-space-size=8192"
                pwd
                sed -i -e 's/__DOCSNAME__/brainCloud Docs (DEV)/g' docusaurus.config.js
                sed -i -e 's/__DOCSURL__/docs-internal/g' docusaurus.config.js
                sed -i -e 's/__APPID__/5T9F73JFG3/g' docusaurus.config.js
                sed -i -e 's/__APIKEY__/6ba3774d7b707e915f0acb12fbfae506/g' docusaurus.config.js
                sed -i -e 's/__GTAGID__/G-4GX8EQHRZL/g' docusaurus.config.js
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing..."
                sh '''
                touch bcdoc-test.txt
                rm bcdoc-*.*
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver...'
                sh '''
                aws --profile JenkinsAPIDOCSS3Bucket s3 sync build s3://bcapidocs-dev
                zip -r "bcdoc-${BUILD_ID}.zip" build
                '''
            }
        }
        stage('Trigger Downstream Job') {
            steps {
                script {
                    echo "Triggering JobB on node: ${env.NODE_NAME}"
                    build job: 'JobB',
                          parameters: [
                              string(name: 'UPSTREAM_NODE', value: env.NODE_NAME)
                          ]
                }
            }
        }
    }
}